import Lab from 'lab'
import {expect} from 'code'

export const lab = Lab.script()
const {experiment, test} = lab

import orb from './../'

experiment('orb', function () {

  test('should exist and be an object', function (done) {
    expect(orb).to.exist()
    expect(orb).to.be.an.instanceOf(Object)
    done()
  })

  test('should contain all namespaces', function (done) {
    expect(orb).to.only.include([
      'common', 'constants', 'functions', 'propagators', 'time', 'transformations', 'vector', 'v',
    ])
    done()
  })

})

experiment('orb (CommonJS)', function () {

  const orbCJS = require('./../').orb

  test('should exist and be an object', function (done) {
    expect(orbCJS).to.exist()
    expect(orbCJS).to.be.an.instanceOf(Object)
    done()
  })

  test('should contain all namespaces', function (done) {
    expect(orbCJS).to.only.include([
      'common', 'constants', 'functions', 'propagators', 'time', 'transformations', 'vector', 'v',
    ])
    done()
  })

})

import orbES2015 from './../lib/'

experiment('orb (ES2015)', function () {

  test('should exist and be an object', function (done) {
    expect(orbES2015).to.exist()
    expect(orbES2015).to.be.an.instanceOf(Object)
    done()
  })

  test('should contain all namespaces', function (done) {
    expect(orbES2015).to.only.include([
      'common', 'constants', 'functions', 'propagators', 'time', 'transformations', 'vector', 'v',
    ])
    done()
  })

})
