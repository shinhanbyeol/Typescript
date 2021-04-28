// Mapped type
type Names = 'name1' | 'name2' | 'name3';
type Ages = { [ k in Names]: number}
const ages: Ages = {
  name1: 10,
  name2: 30,
  name3: 50
}