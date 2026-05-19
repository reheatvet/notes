As Navigator reports are optional every other week, I intend on doing my exhaustive, stat-driven reports biweekly. The data I include doesn't meaningfully change on a week-by-week basis so doing them weekly would not be particularly useful. 

Instead, on these optional weeks, I will on occasion drop an ad-hoc report based on VeBetterDAO news, new features or other major changes worth discussing. 

This round is such a round as we are now getting initial data on the new Freshness multiplier introduced in a recent proposal.

#### I have updated [WalletWatcher](https://walletwatcher.vet) to support this freshness multiplier and built reports on it. 

---
# Early data on freshness

> [!Tip] Freshness primer
> The multiplier is calculated based on the last change on your dApp list. A change is **adding or removing one app from the list**, meaning you don't vote for the exact same set of dApps on a week by week basis. The % you set on the dApps in your list has no impact for freshness. 
> 
> If you repeat the same dApp voting list two weeks in a row, you get 2x freshness. Three weeks in a row -> 1x Freshness.
> 
> Your Freshness is the final multiplier applied when calculating your voting rewards for the week. An unmanaged freshness of 1x will lead to voting reward **reduction** of 60-90% whereas a managed freshness of 3x will lead to a voting reward **increase** by 30-150% (*based on how many other wallets do NOT manage freshness)*
> 
> Crucially, freshness does NOT impact the final allocations received by dApps. It only affects your voting rewards currently.

> [!NOTE] Early-round data
> Bear in mind that this data is not conclusive for the whole round as there are still plenty of days left in the week. However, veDelegate casts most of its vote early in the round, so most of the normal votes have been cast already *(we are missing about ~900 voters, we had 15.6K total voters the previous round - round 98).

With that, let's look at some data (fetched at 10.20 UTC on Tuesday, May 19th) for **Round 99**:
![[Pasted image 20260519122050.png]]

#### So far we are seeing:
- **3.1K** wallets with 3X freshness *(~117.2M VOT3)*
- **11.4K** wallets with 2X freshness *(88.0M VOT3)*
- **134** wallets with 1X freshness *(1.9M VOT3)*

What's interesting is that by raw VOT3 - the 3X freshness wallets make up a larger percentage. 

Here's the same numbers as before, where ~71% of wallets have 2X Freshness. 
![[Pasted image 20260519125636.png]]

But if we look at the same stats but with the **total VOT3** voted with instead, we see that ~56% of VOT3 in total is from 3X freshness voters. 

![[Pasted image 20260519125624.png]]

This means that while the **majority of accounts are not yet managing freshness, the accounts with the largest VOT3 holdings *are***

While it makes sense for the accounts with the most to lose or gain by mismanaging freshness, it highlights an issue that the vast majority of smaller accounts are not aware of the feature yet.

--- 

If we further break down the data into **dApps voted for**, we see new patterns:
![[Pasted image 20260519125916.png]]

The above chart shows the amount of wallets voting for a specific dApp and the voters freshness multipliers. 

As we can see, dApps like Mugshot have the largest wallet voter count by a large margin:
![[Pasted image 20260519130814.png]]

 **~77.5% of their voters are not managing freshness**, whereas 95.4% of Dappies voter's are:
 ![[Pasted image 20260519130838.png]]
 
Granted, Dappies are new, so their freshness is bound to be managed if they were added recently. However, a more established dApp like Turtle Labs still manages an impressive **~86.8% freshness.** 
![[Pasted image 20260519130438.png]]

If we instead look at the total VOT3 amount cast for dApps, again, the story changes somewhat:
![[Pasted image 20260519130651.png]]

Mugshot is still at the top, with a much improved **~62.3% 3x freshness (up from 22%).** 
![[Pasted image 20260519130733.png]]

Here instead, we see a large decline for EVEarn: 
![[Pasted image 20260519130938.png]]

**82.9%** of their total VOT3s received are from wallets not managing freshness. 

For these specific dApps displayed here, this leads to the conclusion that EVEarn has large holders voting for them that are not updating their voting choices weekly, while the bulk of their smaller voters do. 

On the flip-side, Mugshot's **large** voters have updated their preferences for this week but a large majority of their smaller voters **have not**. 

--- 

# Wrap-up
The dApps selected above were purely selected because they had interesting data to show-case here. None were selected because one dApp performed better or worse than any other - it's too early to tell. We need more data on freshness to really drill down into what it means. 

Freshness is an interesting spin on voter rewards that will massively impact voting rewards moving forward. 

- If you're a user voting - **manage your freshness**. For manual voting on VeBetterDAO, your freshness multiplier is clearly displayed when casting votes for the week. Pay attention to it.
- For veDelegate (including lock2earn) and VeBetterDAO auto voters - remember to update voting preferences weekly to remove or add a new dApp to your selection. 
- If you are a citizen with a Navigator (me or someone else), make sure your selected Navigator is updating his or her preferences weekly as their choices directly impact your voting rewards if not managed. 
- If you're a dApp - look at your voters freshness. A voter-base with low freshness might indicate that you have stale and / or automated voters that do not check in frequently to update their voting choices. This might lead to a user drop-off as rewards decrease for them. 

This week we saw primarily 2X freshness as this is the first real week where that could happen. Will we see primarily 1X next week, or do you think people will realize and update their preferences to manage it? Time will tell. I will keep tracking it. 

If you want to check out freshness data yourself - WalletWatcher is still in private preview. **DM me for access.** 

See you next week for the normal report!