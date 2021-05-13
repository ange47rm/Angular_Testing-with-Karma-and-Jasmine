import { VoteComponent } from './vote.component';

describe ('vote component', () => {

        // ARRANGE
    let component: VoteComponent;
    beforeEach( () => {
        component = new VoteComponent;
    })
    
    it ('should increment totalVotes when upvoted', () => {
        // ACT
        component.upVote();
        // ASSERT
        expect (component.totalVotes).toBe(1);
    })

    it ('should decrement totalVotes when downvoted', () => {
        // ACT
        component.downVote();
        // ASSERT
        expect (component.totalVotes).toBe(-1);
    })
})