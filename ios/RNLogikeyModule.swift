//
//  RNLogikeyModule.swift
//  RNLogikeyModule
//
//  Copyright © 2022 Amr Dar. All rights reserved.
//

import Foundation

@objc(RNLogikeyModule)
class RNLogikeyModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
