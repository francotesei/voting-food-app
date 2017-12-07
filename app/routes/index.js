import * as root from './root';
import * as voting from './voting';

export default function(app) {

  app.route('/')
    .get(root.initialMsg)

  app.route('/voteForCandidate')
    .post(voting.voteForCandidate)

  app.route('/totalVotesForCandidate')
    .get(voting.totalVotesForCandidate)

}
