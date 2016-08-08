import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reset, randomize } from '../actionsCreators'
import Nav from '../components/Nav'

const mapStateToProps = (s) => ({})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ reset, randomize }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
