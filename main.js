var Guest_list = ['Huda', 'Tayaba', 'Sara', 'Farheen'];
console.log('\nSorry we can not arrange big table,only 2 peoples will be invited.');
while (Guest_list.length > 2) {
    var remove_Guest = Guest_list.pop();
    console.log("Sorry Miss. ".concat(remove_Guest, ", You are not invited for the party."));
}
for (var i = 0; i < Guest_list.length; i++) {
    console.log('\nDear Miss ' + Guest_list[i] + ',\n\n You are still invited to the party.\n\nThank You!\n\n');
}
Guest_list.splice(0, 2);
console.log(Guest_list);
