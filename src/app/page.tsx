import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <title>WELCOME</title>
      <center>PANAVERSEDAO</center>
      
      
<div>
  <h1 id='para1'>PAKISTAN</h1>
  <p >Helow world</p>
  <h6><p style={{fontSize:"16px",textAlign:"center",color:"white"}} id='para'>Getthing ready for the Next Generation and 
  Future of the Internet-Join a 13 trillion dollar industry with 5 billion users</p></h6>
<h2 id='para3'>Paragraph</h2>
<p id='para5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim officiis, exercitationem eius laboriosam mollitia provident eaque illo <strong id='para2'>1999</strong> possimus recusandae soluta adipisci in doloremque commodi hic repudiandae magnam aliquam nemo voluptatum! Eos, quam nihil. Perferendis voluptatem delectus necessitatibus suscipit labore asperiores doloremque laudantium officia magnam vitae blanditiis, illo dolorem nam accusamus.</p>

  <table>
<thead id='para4'>

  <tr>
<th>NAME</th>
<th>PROFESSION</th>
<th>AGE</th>
  </tr>
</thead>

<tbody>
<tr>
<td>HAMZA</td>
<td>PROGRAMMER</td>
<td>UNKNOWN</td>
</tr>
</tbody>

  </table><hr />
<form action="backend.php">


<div>

 email<input type="email" name="myemail" id="" />

</div>
<br />
<div>
date <input type="date" name="mydate" id="" />
</div>
<br />

<div>

ENTER YOUR CNIC<input type="CNIC" />

</div>
<div>
 <input type="submit" value="submit now" />
</div>
<div>
<input type="reset" value="reset now" />
</div>
</form>




</div>
    </main>
  )
}