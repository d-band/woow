import { expect } from 'chai';

describe('test', function() {
  this.timeout(5000);

  it('hello world', () => {
    let foo = 'bar';
    let tea = {
      flavors: foo
    };
    expect(foo).to.be.a('string');
    expect(foo).to.equal('bar');
    expect(foo).to.have.length(3);
    expect(tea).to.have.property('flavors').with.length(3);
  });

  it('hehe', () => {
    let foo = 'bar';
    let tea = {
      flavors: foo
    };
    expect(foo).to.be.a('string');
    expect(foo).to.equal('bar');
    expect(foo).to.have.length(3);
    expect(tea).to.have.property('flavors').with.length(3);
  });
});