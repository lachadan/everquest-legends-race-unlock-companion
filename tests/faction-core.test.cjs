// Run with: node --test tests/faction-core.test.cjs
// Exercise the exact pure functions embedded in index.html without changing standalone deployment.
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const html=fs.readFileSync(require('node:path').join(__dirname,'..','index.html'),'utf8');
const start='/* BEGIN TESTABLE FACTION CORE */';
const end='/* END TESTABLE FACTION CORE */';
assert.ok(html.includes(start)&&html.includes(end),'Core markers must exist in index.html');
const core=html.split(start)[1].split(end)[0];
const ctx=vm.createContext({});
vm.runInContext(core,ctx);
const parse=t=>ctx.parseFactionText(t);
const calculate=(state,rows,races)=>ctx.calculateFactionUnlocks(state,rows,races);
const header='ID\tName\tStandingValue\tPointsToMax';
const row=(id,standing)=>[id,'Faction '+id,standing,2000-standing].join('\t');
const file=(...lines)=>[header,...lines].join('\n');
const state=()=>({earned:[],done:{}});
test('valid faction TXT including BOM and Windows line endings',()=>{
  const rows=parse('\uFEFF'+file(row(305,2000),row(320,-500)).replace(/\n/g,'\r\n'));
  assert.equal(rows.length,2);
  assert.equal(rows[0].ID,'305');
});
test('reject invalid header, empty file, duplicates and malformed values',()=>{
  for(const input of ['bad\n'+row(305,2000),header,file(row(305,2000),row(305,2000)),file('305\tTest\t2001\t-1'),file('305\tTest\t100\t123'),file('305\tTest\t100\t1900\textra')]){
    assert.throws(()=>parse(input));
  }
});
test('race unlock requires every faction, not just one',()=>{
  const races={Barbarian:[305,320,328],Iksar:[722]};
  const partial=calculate(state(),parse(file(row(305,2000),row(320,2000),row(328,1999))),races);
  assert.equal(partial.done.Barbarian,undefined);
  const complete=calculate(state(),parse(file(row(305,2000),row(320,2000),row(328,2000),row(722,2000))),races);
  assert.equal(complete.done.Barbarian,true);
  assert.equal(complete.done.Iksar,true);
  assert.deepEqual(Array.from(complete.unlocked),['Barbarian','Iksar']);
});
test('previously banked achievements survive a later faction drop',()=>{
  const previous={earned:[305,320],done:{}};
  const next=calculate(previous,parse(file(row(305,100),row(328,2000))),{Barbarian:[305,320,328]});
  assert.equal(next.done.Barbarian,true);
  assert.deepEqual(Array.from(next.earned).sort((a,b)=>a-b),[305,320,328]);
  assert.deepEqual(previous.earned,[305,320]);
});
test('already unlocked race is not announced again and quest races are not auto-unlocked',()=>{
  const previous={earned:[305,320,328],done:{Barbarian:true,'Half Elf':false}};
  const next=calculate(previous,parse(file(row(305,2000))),{Barbarian:[305,320,328]});
  assert.deepEqual(Array.from(next.unlocked),[]);
  assert.equal(next.done['Half Elf'],false);
});
