import { connect } from 'react-redux'
import {
  getUsePostOffice,
  getPostOfficeUrl,
} from '../../send.selectors'
import {
  updatePostOffice,
} from '../../../../actions'
import SendPostOfficeRow from './send-post-office-row.component'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SendPostOfficeRow)

function mapStateToProps (state) {
  return {
    usePostOffice: getUsePostOffice(state),
    postOfficeUrl: getPostOfficeUrl(state),
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updatePostOffice: data => dispatch(updatePostOffice(data)),
  }
}

