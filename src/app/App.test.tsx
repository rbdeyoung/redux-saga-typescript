import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { App } from './App'
import {Switch, Route} from 'react-router-dom'

describe('<App /> with enzyme', () => {
    let AppDom: ShallowWrapper
    beforeEach(() => {
        AppDom = shallow(<App />)
    })
    it('should have a switch with one route', () => {
        const appSwitch = AppDom.find(Switch)
        expect(appSwitch).toHaveLength(1)
        const route = appSwitch.find(Route)
        expect(route).toHaveLength(1)
    })
})