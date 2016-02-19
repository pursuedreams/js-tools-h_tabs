/**
 * Created by hjb2722404 on 2016/2/18.
 */
(function($){
    $.fn.extend({

        h_tab:function(opts){
            var defaults ={
                curName : 'cur'
            };
            var Opt = $.extend({},defaults,opts);
            var oLinks = this.find('a');
            var oCons = this.find('section');
            for(var i = 0; i<oLinks.length; i++){
                oLinks[i].index = i;
                oLinks[i].onclick = function () {
                    for(var j =0; j<oLinks.length; j++){
                        oLinks[j].className="";
                        oCons[j].style.display = "none";
                    }
                    this.className = Opt['curName'];
                    oCons[this.index].style.display ="block";
                }

            }
        }
    });

})(jQuery);

