// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Tim Brady
// Created on: Sep 2020
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */

function calculate () {
  // input
  const a_base = parseFloat(document.getElementById('a-base').value)
  const b_base = parseFloat(document.getElementById('b-base').value)
  const height = parseFloat(document.getElementById('height').value)

  // process
  const area = ((a_base+b_base)/2)*height

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}