import { ToItemListPipe } from './to-item-list.pipe';

describe('ToItemListPipe', () => {
  it('create an instance', () => {
    const pipe = new ToItemListPipe();
    expect(pipe).toBeTruthy();
  });
});
