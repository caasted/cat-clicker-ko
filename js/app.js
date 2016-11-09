initialCats = [
{
	id: 0, 
	clickCount: 0, 
	name: 'Tabby', 
	imgSrc: 'img/434164568_fea0ad4013_z.jpg', 
	nicknames: [
		{ nickname: 'Tabtab' }, 
		{ nickname: 'T-Bone' }, 
		{ nickname: 'Mr. T' }, 
		{ nickname: 'Tabitha Tab Tabby Catty Cat' }
	]
}, 
{
	id: 1, 
	clickCount: 0, 
	name: 'Tiger', 
	imgSrc: 'img/4154543904_6e2428c421_z.jpg', 
	nicknames: [
		{ nickname: 'Tigger' }
	]
}, {
	id: 2, 
	clickCount: 0, 
	name: 'Scaredy', 
	imgSrc: 'img/22252709_010df3379e_z.jpg', 
	nicknames: [
		{ nickname: 'Casper' }
	]
}, {
	id: 3, 
	clickCount: 0, 
	name: 'Shadow', 
	imgSrc: 'img/1413379559_412a540d29_z.jpg', 
	nicknames: [
		{ nickname: 'Shooby' }
	]
}, {
	id: 4, 
	clickCount: 0, 
	name: 'Sleepy', 
	imgSrc: 'img/9648464288_2516b35537_z.jpg', 
	nicknames: [
		{ nickname: 'Zzzzz' }
	]
}]

var Cat = function (data) {

	this.id = ko.observable(data.id);
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nicknames = ko.observableArray(data.nicknames);

	this.level = ko.computed(function() {
		if (this.clickCount() < 10) {
			return 'New Born';
		} else if (this.clickCount() < 20) {
			return 'Infant';
		} else if (this.clickCount() < 50) {
			return 'Child';
		} else if (this.clickCount() < 100) {
			return 'Teen';
		} else if (this.clickCount() < 200) {
			return 'Adult';
		} else if (this.clickCount() < 500) {
			return 'Elder';
		} else {
			return 'Lost Sage';
		}
	}, this);

}


//  TODO: 
//	[  ] Make the current cats show up
//  [  ] Make the currentCat change when you click on a cat in the list

var ViewModel = function () {
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem) {
		self.catList.push( new Cat(catItem) );
	});

	this.currentCat = ko.observable( this.catList()[0] );

	this.selectCat = function( selectedCat ) {
		self.currentCat(selectedCat);
	}

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};

}

ko.applyBindings(new ViewModel())

