import { Registry, RLN, Cache } from 'rlnjs'
import { useState } from 'react';
import vKey from '../zkeyFiles/verification_key.json'
import { appID } from './store'

const _registry = new Registry()

export const addNewUser = () => {
    // create user objects
    const _rln = new RLN(
        '../../zkeyFiles/rln.wasm',
        '../../zkeyFiles/rln_final.zkey',
        vKey,
        1234567894
    )

    console.log(_rln, 'fgf')
    // const _registry = new Registry()

    // create user
    

    _registry.addMember(_rln.commitment);

    console.log(_registry, 'dfdes')
}

