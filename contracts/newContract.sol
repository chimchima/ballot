// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract Ballot{
    uint256[] proposals;
    mapping(address => bool) voters;
    uint256 winningProposal;
    uint256 winningProposalVotes;
    
    constructor(uint proposalsCount) public{
        proposals.length = proposalsCount;
    }
    
    function vote(uint256 _proposal) public {
        bool _hasVoted = voters[msg.sender];
        require(!_hasVoted && _proposal < proposals.length);
        voters[msg.sender] = true;
        proposals[_proposal]++;
        if (proposals[_proposal] > winningProposalVotes) {
            winningProposal = _proposal;
            winningProposalVotes = proposals[_proposal];
        }
    }
    
    function getWinningProposal() public view returns(uint256) {
        return winningProposal;
    }
}
