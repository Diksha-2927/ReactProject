// index.html

// var fullName = document.getElementById('fullname');
// var imgOfUser = document.getElementById('userImg');
// var descOfUser = document.getElementById('descofuser');
var descOfPost = document.getElementById('descofpost');
var imgOfPost = document.getElementById('imgofpost');
var sidebar = document.getElementById('sidebarActivity');

var profileMenu = document.getElementById('profileMenu')
var popupcont = document.getElementById('popup')
var cont = document.getElementById('main');
function toggleMenu() {
  profileMenu.classList.toggle("open-menu");
}
function showSideBar() {
  sidebar.classList.toggle("open-activity")
  if (sidebar.classList.contains("open-activity")) {
    document.getElementById('showMoreLink').innerHTML = "Show Less <b>-</b>"
  }
  else {
    document.getElementById('showMoreLink').innerHTML = "Show More <b>+</b>"
  }
}




function popup() {
  popupcont.classList.toggle('open-popup')
}

function add() {
  popupcont.classList.toggle('open-popup');

  // const userImgFile = userImgInput.files[0];
  const imgOfPostFile = imgofpostInput.files[0];

  const userImgReader = new FileReader();
  const imgOfPostReader = new FileReader();

  // userImgReader.onload = function (e) {
  //   const userImgDataUrl = e.target.result;
  //   document.getElementById('a').src = userImgDataUrl;
  // };

  imgOfPostReader.onload = function (e) {
    const imgOfPostDataUrl = e.target.result;
    document.getElementById('b').src = imgOfPostDataUrl;
  };

  // if (userImgFile) {
  //   userImgReader.readAsDataURL(userImgFile);
  // }

  if (imgOfPostFile) {
    imgOfPostReader.readAsDataURL(imgOfPostFile);
  }
  alert("Your Post is Posted Scroll to The Bottom of the Page");
  cont.innerHTML += `
<div class="post">
<div class="post-author">
<img id="a" src="demla2.jpeg" alt="User Image">
<div>
  <h1>Diksha </h1>
  <small>Student at Chitkara University</small>
  <small>1 min ago</small>
</div >
</div >
<p>${descOfPost.value}</p>
<img id="b" src="" alt="Post Image" width="100%">
<div class="post-stats">
<div>
  <img src="https://th.bing.com/th/id/OIP.icn9N_4xjtjmoEXMSBgyhgHaHa?rs=1&pid=ImgDetMain">
  <img src="https://th.bing.com/th/id/OIP.W3SsTFf-cewZuxg5XQn8BwHaFe?rs=1&pid=ImgDetMain">
  <img src="https://th.bing.com/th/id/OIP.tlRHhOvtcVNusEzoeYDP6AAAAA?rs=1&pid=ImgDetMain">
  <span class="liked-users">AzaanUllah Khan and 5 others</span>
</div>
<div>
  <span>0 comments &middot; 0 shares</span>
</div>
</div>
<div class="post-activity">
<div>
  <img src="https://media.licdn.com/dms/image/v2/D4D03AQEb9M_fgj7koQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727492310269?e=1736985600&v=beta&t=FbSLZnYMzmP8H9b3Aqc6ECQudWb4uxjbxG78Eo9MaY4"
    class="post-activity-user-icon">
  <img src="down-arrow.png" class="post-activity-arrow-icon">
</div>
<div class="post-activity-link">
  <img src="https://th.bing.com/th/id/R.39c646ba9250f63d7503cb1170751bea?rik=6KHpYpX8ELyi5g&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ffacebook-thumbs-up-transparent%2ffacebook-thumbs-up-transparent-1.png&ehk=k4WmxO8DnI5D6jZZJNsj8qVX1On31vTWtDlLSu0tHdQ%3d&risl=&pid=ImgRaw&r=0" class="post-activity-user-icon">
  <span>Like</span>
</div>
<div class="post-activity-link">
  <img src="https://icon-library.com/images/comment-icon-transparent/comment-icon-transparent-27.jpg" class="post-activity-user-icon">
  <span>Comment</span>
</div>
<div class="post-activity-link">
  <img src="https://th.bing.com/th/id/OIP.OFqw_vtMgv3OnOcH5Q9aEwHaHa?rs=1&pid=ImgDetMain" class="post-activity-user-icon">
  <span>Share</span>
</div>
<div class="post-activity-link">
  <img src="https://cdn0.iconfinder.com/data/icons/superglyph-communication/30/message-sending-1024.png" class="post-activity-user-icon">
  <span>Send</span>
</div>
</div>
</div>
`;
}

const likebtn = document.getElementById('likeBtn');
let likeCount = 56;


likebtn.addEventListener('click', () => {
  if (likebtn.textContent == '👍 Like') {
    likebtn.textContent = 'unLiked';
    likeCount++;
    document.getElementById('likeCount').textContent = `${likeCount} likes`;
  } else {
    likeCount--;
    document.getElementById('likeCount').textContent = `${likeCount} likes`;
    likebtn.textContent = '👍 Like';
  }
})
