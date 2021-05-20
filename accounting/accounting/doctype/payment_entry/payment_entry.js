// Copyright (c) 2021, ac and contributors
// For license information, please see license.txt


frappe.ui.form.on('Payment Entry', 'onload', function(frm) {
    frm.set_query('party', function(){
        return {
            'filters': {
                'party_type': frm.doc.party_type
            }
        }
    })
})