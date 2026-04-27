function binary(decimal) {
	let bits = [];
  let value = 1;
  while (value <= decimal){
    bits.unshift(value);
    value*=2;
  }
	let bitSum = 0;
	let _bitSum = [];
	for (let i = 0; i<bits.length;i++){
		if (bits[i] <= decimal && bitSum+bits[i]<=decimal){
			bitSum += bits[i];
			_bitSum.push(1);
		}else{
      _bitSum.push(0);
    }
	}
  console.log(_bitSum);
  console.log(bitSum);
  return _bitSum.join("").replace(/^0+/, "") || "0";
}

let decimal = 23;
console.log(binary(decimal));