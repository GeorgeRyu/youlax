class Category {
  constructor(key, title, data) {
    this.key = key;
    this.title = title;
    this.data = data;
  }
}


class Item {
  constructor(key, title, image, sound) {
    this.key = key;
    this.title = title;
    this.image = image;
    this.sound = sound;
  }
}

const fire = [
  new Item(
    0, 'Fire_1', 'https://images.unsplash.com/photo-1496483353456-90997957cf99?auto=format&fit=crop&w=632&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'test_1.mp3'
  ),
  new Item(
    1, 'Fire_2', 'https://images.unsplash.com/photo-1476455553758-5a8b16727e23?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'test_2.mp3'
  ),
  new Item(
    2, 'Fire_3', 'https://images.unsplash.com/photo-1499560262498-a472b08d5f17?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'test_3.mp3'
  ),
]

const rain = [
  new Item(
    0, 'Rain_1', 'https://images.unsplash.com/photo-1486016006115-74a41448aea2?auto=format&fit=crop&w=1047&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'test_3.mp3'
  ),
  new Item(
    1, 'Rain_2', 'https://images.unsplash.com/photo-1428592953211-077101b2021b?auto=format&fit=crop&w=967&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'test_1.mp3'
  ),
  new Item(
    2, 'Rain_3', 'https://images.unsplash.com/photo-1484889176133-94079a66d71a?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'test_2.mp3'
  ),
]

const forest = [
  new Item(
    0, 'Forest_1', 'https://images.unsplash.com/photo-1440581572325-0bea30075d9d?auto=format&fit=crop&w=967&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'test_2.mp3'
  ),
  new Item(
    1, 'Forest_2', 'https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'test_3.mp3'
  ),
  new Item(
    2, 'Forest_3', 'https://images.unsplash.com/photo-1445600523100-d5b99b664bda?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'test_1.mp3'
  ),
]

const ocean = [
  new Item(
    0, 'Ocean_1', 'https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'test_1.mp3'
  ),
  new Item(
    1, 'Ocean_2', 'https://images.unsplash.com/photo-1494879540385-bc170b0878a7?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'test_2.mp3'
  ),
  new Item(
    2, 'Ocean_3', 'https://images.unsplash.com/photo-1441829266145-6d4bfbd38eb4?auto=format&fit=crop&w=802&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'test_3.mp3'
  ),
]

const wind = [
  new Item(
    0, 'Wind_1', 'https://images.unsplash.com/photo-1496867557017-559adb93b339?auto=format&fit=crop&w=1051&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'test_3.mp3'
  ),
  new Item(
    1, 'Wind_2', 'https://images.unsplash.com/photo-1456356627738-3a96db6e2e33?auto=format&fit=crop&w=1358&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'test_3.mp3'
  ),
  new Item(
    2, 'Wind_3', 'https://images.unsplash.com/photo-1441803293480-6d6c52f377d9?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'test_3.mp3'
  ),
]

export const items = [
  new Category(0, 'Fire', fire),
  new Category(1, 'Rain', rain),
  new Category(2, 'Forest', forest),
  new Category(3, 'Ocean', ocean),
  new Category(4, 'Winds', wind)
]