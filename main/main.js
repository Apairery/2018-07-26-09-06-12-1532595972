module.exports = function main(str) {
    var num_templet = [['._.','|.|','|_|'], ['...','..|','..|'], ['._.','._|','|_.'],['._.','._|','._|'],['._.','|_|','..|'],
['._.','|_.','._|'],['._.','|_.','|_|'],['._.','..|','..|'],['._.','|_|','|_|'],['._.','|_|','..|']]
    var output_lcd = [[],[],[]]
    var final_output = []
    for (var i = 0; i < str.length; i++){
        target_number = Number(str[i]);
        num_lcd = num_templet[target_number];
        for (var j = 0; j < 3; j++){
            output_lcd[j].push(num_lcd[j]);
        }
    }
    for (var i = 0; i < output_lcd.length; i++){
        final_output.push(output_lcd[i].join(' ') + '\n');
    }
    return final_output.join('')
};