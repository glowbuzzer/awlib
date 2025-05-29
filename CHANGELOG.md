# Changelog

## [1.2.2](https://github.com/glowbuzzer/awlib/compare/v1.2.1...v1.2.2) (2025-05-29)


### Bug Fix

* AwTubeStatusTile.tsx compile issue ([b719b86](https://github.com/glowbuzzer/awlib/commit/b719b86d39a187582d266911ff35532a998b77e8))

## [1.2.1](https://github.com/glowbuzzer/awlib/compare/v1.2.0...v1.2.1) (2025-05-29)


### Chore

* update awlib dependencies ([4708bf7](https://github.com/glowbuzzer/awlib/commit/4708bf7e3d820c962ef4ea3c4b65d60829ae379b))

## [1.2.0](https://github.com/glowbuzzer/awlib/compare/v1.1.2...v1.2.0) (2024-10-17)


### Feature

* **#180:** Add tool config editor ([9a86058](https://github.com/glowbuzzer/awlib/commit/9a86058731023a4c3f6c8135abd5f7b84e18b216))
* **#189:** Tool offset and payload activities in FlowMaker ([ec3ebd4](https://github.com/glowbuzzer/awlib/commit/ec3ebd4c41936b99674774181ed8d76c75286339))
* **#190:** Run tile for FlowMaker ([ec3ebd4](https://github.com/glowbuzzer/awlib/commit/ec3ebd4c41936b99674774181ed8d76c75286339))
* **#19:** Show tool model file at end of robot ([743ab0f](https://github.com/glowbuzzer/awlib/commit/743ab0fbf83444328de2bdbf46f2899579664e3b))
* **#205:** Multiple mode support ([7c33cc2](https://github.com/glowbuzzer/awlib/commit/7c33cc2d85f7b7fffed12c733e70d220002baf72))
* **#210:** support QUICKSTOP ([25b168a](https://github.com/glowbuzzer/awlib/commit/25b168a543bc50a98bfd436bd170dc55cd7e2a8a))
* **#212:** set safety douts for current mode (if configured) ([25b168a](https://github.com/glowbuzzer/awlib/commit/25b168a543bc50a98bfd436bd170dc55cd7e2a8a))
* **#216:** Add $metadata to config for various items ([651fea0](https://github.com/glowbuzzer/awlib/commit/651fea050a1dece9ac4d8f06212fdc931d9e60a6))
* **#218:** Rework hand guided status tray item (generic manual mode item) ([651fea0](https://github.com/glowbuzzer/awlib/commit/651fea050a1dece9ac4d8f06212fdc931d9e60a6))
* **#225:** Modbus dout and iout in FlowMaker ([ec3ebd4](https://github.com/glowbuzzer/awlib/commit/ec3ebd4c41936b99674774181ed8d76c75286339))
* **#240:** Plugin to serve model files in vite and express app ([743ab0f](https://github.com/glowbuzzer/awlib/commit/743ab0fbf83444328de2bdbf46f2899579664e3b))
* **#250:** Auto-override safety inputs in sim mode ([c2e89ff](https://github.com/glowbuzzer/awlib/commit/c2e89ff6dbe458a58e2341574e3ea5f624424bd2))


### Bug Fix

* **#184:** Memoise useStream return ([d0ccb63](https://github.com/glowbuzzer/awlib/commit/d0ccb63e61696cb2a2476701f7e97466524e8225))
* **#217:** Reset CSP mode when existing hand guided mode ([651fea0](https://github.com/glowbuzzer/awlib/commit/651fea050a1dece9ac4d8f06212fdc931d9e60a6))


### Chore

* **#219:** Rename deadman to enabling switch ([651fea0](https://github.com/glowbuzzer/awlib/commit/651fea050a1dece9ac4d8f06212fdc931d9e60a6))
* **#220:** Give current mode in jog tile overlay ([651fea0](https://github.com/glowbuzzer/awlib/commit/651fea050a1dece9ac4d8f06212fdc931d9e60a6))
* **#226:** FlowMaker mode overlay ([ec3ebd4](https://github.com/glowbuzzer/awlib/commit/ec3ebd4c41936b99674774181ed8d76c75286339))
* Add visual guard for various states and clean up config tile layouts ([bf603b1](https://github.com/glowbuzzer/awlib/commit/bf603b1eea4eb42c1cfddcb40ef1f72630c4bb62))
* Improve feedrate override tests ([ec3ebd4](https://github.com/glowbuzzer/awlib/commit/ec3ebd4c41936b99674774181ed8d76c75286339))
* Initial work on IBT modes ([7c33cc2](https://github.com/glowbuzzer/awlib/commit/7c33cc2d85f7b7fffed12c733e70d220002baf72))
* minor refactorings and build fixes ([701c211](https://github.com/glowbuzzer/awlib/commit/701c211039ef2f04a7d971ee23567725375cb226))
* refactor dock tile definitions plus other changes ([04bf995](https://github.com/glowbuzzer/awlib/commit/04bf995faef27354b3cd699be38c4e44e761e0b6))
* refactor tsconfig files ([7c33cc2](https://github.com/glowbuzzer/awlib/commit/7c33cc2d85f7b7fffed12c733e70d220002baf72))
* rename AwTube Status tile ([e86b6d7](https://github.com/glowbuzzer/awlib/commit/e86b6d7ea20d41a092f7f387457f1e34e0afa351))
* split up hooks to reduce unnecessary re-renders ([d0ccb63](https://github.com/glowbuzzer/awlib/commit/d0ccb63e61696cb2a2476701f7e97466524e8225))
* update gbr versions ([165ee9b](https://github.com/glowbuzzer/awlib/commit/165ee9ba13fef713ab19cb6380841319056e8662))
* update glowbuzzer versions ([902d766](https://github.com/glowbuzzer/awlib/commit/902d7669c322759bc9f9edd332cb1dd2e006f488))
* Update L2 friction params ([a7e8683](https://github.com/glowbuzzer/awlib/commit/a7e86834730e2efb7bc86f46d1f5bcb6470c7750))
* update lockfile ([a7d0e58](https://github.com/glowbuzzer/awlib/commit/a7d0e582d62956fc50490c05236aff0ed4da40c6))
* update pnpm github action ([2fb5e47](https://github.com/glowbuzzer/awlib/commit/2fb5e47f063029aa9671ad1c71dc058ccdcc9553))
* work on safety states and modes ([41450b7](https://github.com/glowbuzzer/awlib/commit/41450b72e6a4f829d4f39bc6695196c9e4535c62))

## [1.1.2](https://github.com/glowbuzzer/awlib/compare/v1.1.1...v1.1.2) (2024-01-23)


### Chore

* fix compiler warnings ([73ad3d6](https://github.com/glowbuzzer/awlib/commit/73ad3d631dc6535648a623853c7f7249e6084985))

## [1.1.1](https://github.com/glowbuzzer/awlib/compare/v1.1.0...v1.1.1) (2024-01-05)


### Chore

* update gbr versions ([335d4b2](https://github.com/glowbuzzer/awlib/commit/335d4b2ad2430c2c6fae05a127344276c2b7b57b))

## [1.1.0](https://github.com/glowbuzzer/awlib/compare/v1.0.0-beta.3...v1.1.0) (2024-01-05)


### Chore

* add optimised glb process ([ca5529b](https://github.com/glowbuzzer/awlib/commit/ca5529b5f389b54a04bef5228cfb664e73e96da2))
* release 1.1.0 ([7840ff9](https://github.com/glowbuzzer/awlib/commit/7840ff9aee3964e37096e07ae4cdc170be37193f))
* split out awlib as a git submodule ([ca5529b](https://github.com/glowbuzzer/awlib/commit/ca5529b5f389b54a04bef5228cfb664e73e96da2))
* use suspend-react to load glb files from base64 ([e98ce8b](https://github.com/glowbuzzer/awlib/commit/e98ce8b2063324f652b5408a58e1c3b0788a1705))
