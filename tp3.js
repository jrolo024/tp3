function repeat(s,n)
{
	let s1='';
	for (i=0;i<n;i++)
	{
		s1=s1+s;
	}
	return s1;
}

function TestRepeat(){
	console.log(repeat("foo",3)); 
	console.log(repeat("snoop",5)); 
	console.log(repeat("bouh",4));

}
function truncate(s,n)
{
	let n1=s.length;
	let s2='';
	let s3='---';
	let s4='';
	if (n1<=n)
		{return s;}
	else 
	{
		s2=s.substring(0,n-3);
		s4=s2+s3;
		return s4;
	}
	
}

function TestTruncate(){
	console.log(truncate("unchanged text",20)); 
	console.log(truncate("unchanged text",14)); 
	console.log(truncate("truncated text",10));

}

function isPalindrome(s)
{
	let n1=s.length;
	let s1='';
	for (i=n1-1;i>=0;i--)
	{ 	s1=s1+s[i];
	}
	if (s==s1){
		return true;
		}
	else
		{return false};

}

function TestPalindrome(){
	console.log(isPalindrome("bonjour"));   // => false
	console.log(isPalindrome("toto"));     // => false
	console.log(isPalindrome("kayak"));     // => true
	console.log(isPalindrome("ressasser")); // => true

}
function swapCase(s)
{	
	let n1=s.length;
	let s1='';
	for (i=0;i<n1;i++)
	{
		if(s[i]==s[i].toUpperCase())
			{s1=s1+s[i].toLowerCase();}
		else{ 
			if(s[i]==s[i].toLowerCase())
			{s1=s1+s[i].toUpperCase();}
		}
	}
	return s1;
}

function TestSwap(){
console.log(swapCase("HELLO"));       // => hello
console.log(swapCase("bye"));         // => BYE
console.log(swapCase("GooD NighT"));  // => gOOd nIGHt

}
function main(){
    TestTruncate();
    TestRepeat();
    TestPalindrome();
	TestSwap ();
}
main();