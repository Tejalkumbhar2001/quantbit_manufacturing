// Copyright (c) 2024, Quantbit Technologies Pvt. Ltd and contributors
// For license information, please see license.txt

frappe.ui.form.on('Component Work Order', {
	// refresh: function(frm) {

	// }
});



frappe.ui.form.on('Component Work Order', {
	finished_item_code: function(frm) {
		frm.clear_table("component_raw_item");
		frm.refresh_field('component_raw_item');
		frm.call({
			method:'get_raw_materials',
			doc:frm.doc
		})
	}
});


frappe.ui.form.on('Component Work Order', {
	updated_quantity_to_manufacturing: function(frm) {
		frm.refresh_field('quantity');
		frm.call({
			method:'calculate_quantity_in_component_row_item',
			doc:frm.doc
		})
	}
});

frappe.ui.form.on('Component Work Order', {
	source_warehouse: function(frm) {
		frm.call({
			method:'set_source_warehouse',
			doc:frm.doc
		})
	}
});
