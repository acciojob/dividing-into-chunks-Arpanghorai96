const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const divide = (arr, n) => {
  // Write your code here
	let subarray=[],sum=0,ans=[];
	for(let i=0;i<arr.length;i++)
		{
			if(sum+arr[i]<=n)
			{
				subarray.push(arr[i]);
				sum+=arr[i];
			}
			else{
				ans.push(subarray)
				subarray=[arr[i]];
				sum=arr[i];
			}
		}
	ans.push(subarray)
	return ans;
};

	const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
