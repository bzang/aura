({
  afterRender: function(cmp) {
    console.log('window ' + window); // to check locker on/off

    this.superAfterRender();

    var script = document.createElement('script');
    script.setAttribute('src', 'https://code.s4d.io/widget-space/archives/0.1.298/bundle.js');
    //script.setAttribute('src', 'https://code.s4d.io/widget-space/production/bundle.js');
    var link = document.createElement('link');
    link.setAttribute('rel', "stylesheet");
    link.setAttribute('href', 'https://code.s4d.io/widget-space/archives/0.1.298/main.css');
    //link.setAttribute('href', 'https://code.s4d.io/widget-space/production/main.css');

    document.body.appendChild(script);
    document.head.appendChild(link);

    var el = document.createElement('div');
    document.body.appendChild(el);

    setTimeout(function () {
        window.ciscospark.widget(el).spaceWidget({
            accessToken: cmp.get("v.accessToken"),
            toPersonEmail: cmp.get("v.toPersonEmail")
        });
    }, 5000);
  }
})