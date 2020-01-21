const directionsTab = () => {
    const content = `<input type="radio" id="tab4" name="tab">    <label class="tabButton" for="tab4">Directions</label>    <div class="tab">      <div class="content">        <div id="contact">          <div id="map">          <div class="mapouter"><div class="gmap_canvas"><iframe width="1080" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=new%20york%20pizza%20hut&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net">embedgooglemap.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:1080px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1080px; margin-left:30px}</style></div>          </div>        </div></div>    </div>`

    return content;
}

export default directionsTab;