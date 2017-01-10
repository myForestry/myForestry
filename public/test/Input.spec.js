import React from 'react';
import Input from '../src/patterns/Input';
import renderer from 'react-test-renderer';

test('Input has prop name', () => {
  const component = renderer.create(
    <Input name="foo" />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(tree.children[1].props.name).toBe('foo');
});

test('Input has className form-group', () => {
  const component = renderer.create(
    <Input />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(tree.props.className).toBe('form-group');
});

test('Input has children', () => {
  const component = renderer.create(
    <Input />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(tree.children).toHaveLength(2);

  for (var i = 0; i < tree.children.length; i++) {
    expect(tree.children[i].children).toBe(null);
  }
});

test('Input accepts a label', () => {
  const component = renderer.create(
    <Input label="foo" />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(tree.children[0].children).toContain('foo');
});

test('Input accepts an initial value', () => {
  const component = renderer.create(
    <Input initialValue="foo" />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(tree.children[1].props.value).toBe('foo');
});
