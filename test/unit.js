var {assert} = require('chai');

const {getTotalRedeemed, getTotalUnforgiven} = require( '../src/helpers/counts' )

describe('get totals case 1', function() {

  const grudges = [
    {
      id: 0,
      name: 'Donald',
      offense: 'Being a dick',
      forgiven: false,
      date: 1487890956139
    },
    {
      id: 1,
      name: 'DonaldJr',
      offense: 'Being a big dick',
      forgiven: false,
      date: 1487890956140
    }
  ]

  it('should return 0 redeemed grudges', function(){
    var result = getTotalRedeemed(grudges)
    assert.equal(result, 0)
  })

  it('should return 2 unforigven grudges', function(){
    var result = getTotalUnforgiven(grudges)
    assert.equal(result, 2)
  })
})

describe('get totals case 2', function() {

  const grudges = [
    {
      id: 0,
      name: 'Donald',
      offense: 'Being a dick',
      forgiven: true,
      date: 1487890956139
    },
    {
      id: 1,
      name: 'DonaldJr',
      offense: 'Being a big dick',
      forgiven: true,
      date: 1487890956140
    }
  ]

  it('should return 2 redeemed grudges', function(){
    var result = getTotalRedeemed(grudges)
    assert.equal(result, 2)
  })

  it('should return 0 unforigven grudges', function(){
    var result = getTotalUnforgiven(grudges)
    assert.equal(result, 0)
  })
})
