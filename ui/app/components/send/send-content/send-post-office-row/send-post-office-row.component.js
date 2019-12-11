import React, { Component } from 'react'
import SendRowWrapper from '../send-row-wrapper';

export default class SendPostOfficeRow extends Component {

  render () {
    const { usePostOffice, postOfficeUrl, updatePostOffice } = this.props;

    return (
      <div>
        <SendRowWrapper label="Use Post Office?">
          <input type="checkbox" checked={usePostOffice} onChange={evt => updatePostOffice({
            usePostOffice: evt.target.checked,
            postOfficeUrl,
          })}/>
        </SendRowWrapper>
        <SendRowWrapper label="Post Office Url">
          <input type="text" value={postOfficeUrl} onChange={evt => updatePostOffice({
            postOfficeUrl: evt.target.value,
            usePostOffice,
          })}/>
        </SendRowWrapper>
      </div>
    )
  }
}
