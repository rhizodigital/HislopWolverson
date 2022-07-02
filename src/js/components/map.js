(function(){
    let is_iPhone = navigator.userAgent.includes('iPhone');
    let is_iPad = navigator.userAgent.includes('iPad');
    let is_mac = navigator.userAgent.includes('Macintosh');
    
    let isApple = is_iPhone || is_iPad || is_mac;
    
    let mapLinkEl = document.querySelectorAll('.map-link');
    
    const appleMap = "https://maps.apple.com/?address=43%20Thorne%20Road,%20Doncaster,%20DN1%202EX,%20England&auid=11082247708388682404&ll=53.524264,-1.126350&lsp=9902&q=Hislop%20%26%20Wolverson&_ext=CjMKBQgEEOEBCgQIBRADCgUIBhCLAQoECAoQAAoECFIQBAoECFUQAAoECFkQAwoFCKQBEAESJimHk+rih8JKQDFPTEUIeiTyvzkFaRA/rsNKQEGd43Uflebxv1AE";
    const googleMap = "https://goo.gl/maps/t3x8nofCbVUcRzuy7";
    
    function mapLink() {
        if (isApple) {
            return appleMap
        } else {
            return googleMap
        }
    }
    mapLinkEl.forEach((link) => {
        console.log(link)
        link.href = mapLink()
    });
})();