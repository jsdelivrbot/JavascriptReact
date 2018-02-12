/**
 * Created by Sourabh Punja on 2/11/2018.
 */

import { renderComponent,expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
    let component;

    beforeEach(() => {
        const props = { comments : ['New Comment', 'Other New Comment']}
       component = renderComponent(CommentList, null, props);
    });

    it('shows an Li for each comment', () => {
        expect(component.find('li').length).to.equal(2);
    });

    it('shows an each comment that is provided', () => {
        expect(component).to.contain('New Comment');
        expect(component).to.contain('Other New Comment');
    });
});