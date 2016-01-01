
import Lab from 'lab'
import {expect} from 'code'

export const lab = Lab.script()
const {experiment, test} = lab

import orb from './../'

experiment('orb', () => {

  test('should exist and be an object', done => {
    expect(orb).to.exist()
    expect(orb).to.be.an.instanceOf(Object)
    done()
  })

  test('should contain all namespaces', done => {
    expect(orb).to.only.include([
      'common', 'constants', 'functions', 'propagators', 'time', 'transformations', 'vector', 'v',
    ])
    done()
  })

})

experiment('orb (CommonJS)', () => {

  const orbCJS = require('./../')

  test('should exist and be an object', done => {
    expect(orbCJS).to.exist()
    expect(orbCJS).to.be.an.instanceOf(Object)
    done()
  })

  test('should contain all namespaces', done => {
    expect(orbCJS).to.only.include([
      'common', 'constants', 'functions', 'propagators', 'time', 'transformations', 'vector', 'v',
    ])
    done()
  })

})

import orbES2015 from './../lib/'

experiment('orb (ES2015)', () => {

  test('should exist and be an object', done => {
    expect(orbES2015).to.exist()
    expect(orbES2015).to.be.an.instanceOf(Object)
    done()
  })

  test('should contain all namespaces', done => {
    expect(orbES2015).to.only.include([
      'common', 'constants', 'functions', 'propagators', 'time', 'transformations', 'vector', 'v',
    ])
    done()
  })

})
