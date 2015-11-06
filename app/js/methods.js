/**
 * Created by waclab1807 on 02.11.15.
 */

function test(element) {
    if (element.value != '') {
        element.value = 'red';
        return false;
    } else {
        element.className = '';
        return true;
    }
}

$(function() {
    $('input[name="daterange"]').daterangepicker({
        "startDate": "10/31/2015",
        "endDate": "11/06/2015",
        "opens": "center"
    }, function(start, end, label) {
    });
});