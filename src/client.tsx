import React from 'react'
import {hydrate} from 'react-dom'
import {Root} from './app/Root'
import {configureStore} from './app/store/configureStore'
import createHistory from 'history/createHashHistory'
import {Store} from 'redux'
import createMuiTheme from 'material-ui/styles/createMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const store = configureStore(createHistory(), window.__PRELOADED_STATE__)

interface Props {
    store: Store<RootState>
}
class MuiWrapperComponent extends React.Component<Props> {

    constructor(props: Props) {
        super(props)
    }

    public componentDidMount() {
        const jssStyles = document.getElementById('jss-server-side')
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles)
        }
    }

    public render() {
        return <Root {...this.props} />
    }
}

const theme = createMuiTheme({})

hydrate(
    <MuiThemeProvider theme={theme}>
        <MuiWrapperComponent store={store}/>
    </MuiThemeProvider>, document.getElementById('root'))

if (module.hot) {
    module.hot.accept()
}
