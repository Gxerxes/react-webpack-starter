export const SUBMIT_FORM_SUCCESSFUL = 'SUBMIT_FORM_SUCCESSFUL'
export const DISPLAY_NAME = 'DISPLAY_NAME'


export const submitFormSuccess = payload => ({  
    type: SUBMIT_FORM_SUCCESSFUL,
    payload
})

export const displayName = payload => ({ 
    type: DISPLAY_NAME,
    payload
})
