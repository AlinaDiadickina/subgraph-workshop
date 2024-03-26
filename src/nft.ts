import {
  Upgraded as UpgradedEvent,
  LevelDataSet as LevelDataSetEvent,
} from "../generated/Nft/Nft";
import { Upgraded, Level } from "../generated/schema";

export function handleUpgraded(event: UpgradedEvent): void {
  let entity = new Upgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.implementation = event.params.implementation;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handlerLevelDataSet(event: LevelDataSetEvent): void {
  let level = new Level(event.params.level.toString());
  level.level = event.params.level;
  level.isGenesis = event.params.isGenesis;
  level.price = event.params.price;
  level.vestingRewardWOWTokens = event.params.vestingRewardWOWTokens;
  level.lifecycleDuration = event.params.lifecycleDuration;
  level.extensionDuration = event.params.extensionDuration;
  level.allocationPerProject = event.params.allocationPerProject;
  level.supplyCap = event.params.supplyCap;
  level.baseURI = event.params.baseURI;

  level.save();
}
