const webshare = ()=>{
    console.log('webshare working')
    const shareBtn = document.getElementById('share-btn');
    shareBtn.onclick = () => {
      if (navigator.share) {
        navigator.share({
          title: 'Share',
          text: 'Send to a friend ;)',
          url: window.location.href
        }).then(() => {
          console.log('Thanks for sharing!');
        })
        .catch(err => {
          console.log(`Couldn't share because of`, err.message);
        });
      } else {
        console.log('web share not supported');
      }
   }
  }

  
  export default webshare