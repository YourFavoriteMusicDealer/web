import { Selector } from 'testcafe'

const input = new Selector('.player-volume input')

fixture(`Volume`)
  .page('http://localhost:8080')

test('Slider isset', async t => {
  await t
    .expect(input.exists).ok()
})

test('Default value 100', async t => {
  await t
    .expect(input.value).eql('100')
})

test('Max 100', async t => {
  const attributes = await input.attributes

  await t
    .expect(attributes.max).eql('100')
})

test('Min 0', async t => {
  const attributes = await input.attributes

  await t
    .expect(attributes.min).eql('0')
})

test('Step any', async t => {
  const attributes = await input.attributes

  await t
    .expect(attributes.step).eql('any')
})
