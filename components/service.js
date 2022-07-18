
import React, { useState, useEffect } from 'react'

export async function getFetch(url) {
    try {
        let infoArr = await fetch(url)
        infoArr =  infoArr.json();
        return infoArr;
    }
    catch (err) {
        console.log(err)
    }
}
