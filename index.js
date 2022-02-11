function sort(temperaturas){

    var count, copy
    var trade = 0
    var limit = 4

    console.log("==========================")
    console.log("  Not Organized Sequency")
    console.log("|", temperaturas.toString(), "|")
    console.log("==========================")

    do {
        trade = 0
        for(count = 0; count < limit; count++){
            if(temperaturas[count] > temperaturas[count+1]){
                copy = temperaturas[count]
                temperaturas[count] = temperaturas[count+1]
                temperaturas[count+1] = copy
                trade = 1
            }
        }
    } while (trade == 1);

    console.log("=======================")
    console.log("  Organized Sequency.")
    console.log("|", temperaturas.toString(), "|")
    console.log("=======================")

}