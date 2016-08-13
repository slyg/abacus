import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reset, randomize, randomizeStorm, toggleMute } from '../actionsCreators'
import Nav from '../components/Nav'

const mapStateToProps = ({sound}) => ({soundMuted: sound.muted})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ reset, randomize, randomizeStorm, toggleMute }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
