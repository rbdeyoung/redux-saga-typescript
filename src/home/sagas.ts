import {delay, SagaIterator} from 'redux-saga'
import {call, put, takeEvery} from 'redux-saga/effects'
import * as t from './actions/types'
import {startBlockingUI, stopBlockingUI} from '../app/actions/creators'
import uid from 'uid-safe'
import {CounterOperation} from './types'
import {Action} from 'redux-actions'

export function* loadCounterUpdate(action: Action<CounterOperation>): SagaIterator {

    // Simulate long running job id
    const id: string = uid.sync(12)

    // Simulate long running job time
    const callLength: number = crypto.getRandomValues(new Uint32Array(1))[0] % 10

    yield put(startBlockingUI({ id, callName: 'loadCounterUpdate', callStart: Date.now() }))

    yield call(delay, callLength * 1000)
    yield put(stopBlockingUI(id))
}

export function* watchLoadCounterUpdate() {
    yield takeEvery(t.UPDATE_COUNTER, loadCounterUpdate)
}

export const sagas = [
    watchLoadCounterUpdate(),
]