///<reference path = "C:\Users\idawebqueen\source\repos\kuchacha\kuchacha\Scripts\knockout-3.4.2.debug.js" />



$(function () {
    var viewModel = {
        productPrice: ko.observable(89),
        productQty: ko.observable(2),
        newvotes: ko.observable(),

        products: ko.observableArray([
            { name: "shoe", price: "788", id: 1, url:"https://ae01.alicdn.com/kf/HTB1BXxSwOCYBuNkHFCcq6AHtVXaL/Summer-Women-s-Sandals-Bohemia-Gladiator-Sandal-Women-Shoes-Flip-Flops-Sandalias-Mujer-Ladies-Shoe-Fashion.jpg_640x640.jpg" },
            { name: "blouse", price: "50", id: 2, url:"https://anninc.scene7.com/is/image/ATF/483740_6892?$312x384$" },
            { name: "dress", price: "16", id: 3, url: "https://gloimg.rglcdn.com/rosegal/pdm-product-pic/Clothing/2016/10/20/source-img/20161020173839_11735.jpg" },
            { name: "lipstick", price: "88", id: 4, url: "https://www.rd.com/wp-content/uploads/2017/09/10-occasion-Lipstick-Mistakes-that-Are-Ruining-Your-Look_680988598-LightField-Studios.jpg" },
            { name: "earring", price: "4", id: 5, url: "https://kinclimg1.bluestone.com/f_jpg,c_scale,w_515,b_rgb:f0f0f0/giproduct/BISK0461S03_YAA18DIG6XXXXXXXX_ABCD00-PICS-00004-1024-31081.png" },
            { name: "bra", price: "96", id: 6, url: "https://target.scene7.com/is/image/Target/AA_328x328_junewk5_bra_catnav_bralette91957-170626_1498508193478?wid=328&hei=328&qlt=80&fmt=pjpeg" },
            { name: "lingerine", price: "48", id: 7, url: "https://images.fashiontofigure.com/is/image/NewYorkCompany/productdetaildefault/Alana-Lingerie-Bodysuit_02939249_655.jpg" },
            { name: "neclace", price: "36", id: 8, url: "https://lumiere-a.akamaihd.net/v1/images/file_82b9488d.jpeg?width=1200&region=0%2C0%2C2000%2C2000&quality=8" },
        ]),
        GroupIdeas: ko.observableArray([           
         ]),
        GroupMember: ko.observableArray([
            { member: "Akuba", relation: "friend", id: 1 },
            { member: "Isaac", relation: "Husband", id: 2 },
            { member: "Ira", relation: "Sister", id: 3 },
            { member: "Davida", relation: "Mum", id: 4 }
        ]),
        partyPerson: ko.observable("Ida"),
        partyOrganiser: ko.observable("Royce"),
        loginUser: ko.observable("Davida"),
        //addProduct = function () { /* ... leave unchanged ... */ }

    };
    function GiftIdea (product) {
        var self = this;
        self.name = ko.observable(product.name);
        self.id = ko.observable(product.id);
        self.price = ko.observable(product.price);
        self.url = ko.observable(product.url);
        self.member = ko.observable(viewModel.loginUser);
        votes.id = ko.observable(0);
        /*This will be a contructor for every gift Idea 
         * 
         * */
        

        
        
    }
    viewModel.removeProduct = function (product) {
        console.log(product.id);
       viewModel.GroupIdeas.push({ 
           name: product.name, id: product.id, price: product.price, url: product.url, member: viewModel.loginUser, votes: ko.observable(0)
           //create an object of observables from gift Idea constructor
        });
       
       // viewModel.GroupIdeas.add({ member: "Akuba", relation: "friend", id: 1 });
        viewModel.products.remove(function ( item ) {
        
            return item.id === product.id;
        });
        
    }

    viewModel.RemoveIdea = function (idea) {
        viewModel.GroupIdeas.remove(function (item) {
            return item.id === idea.id;
        });
    }

    viewModel.voteup = function (idea) {
        // viewModel.idea.vote(parseInt(viewModel.idea.vote() + 1));
        idea.votes(idea.votes()+1);
        //console.log(idea.votes(9));

       /* viewModel.newvotes = ko.pureComputed({
            read: function () {
                return idea.votes;
               
            },
            write: function (value) {
                value = parseInt(value + 1);
                
            },
            owner: this
        });*/

    }
   
    viewModel.totalAmt = ko.computed(function () {
        return this.productPrice() * this.productQty();
    }, viewModel);


    ko.applyBindings(viewModel);
})
