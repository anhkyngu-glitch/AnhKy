import SwiftUI

@main
struct AimPanelApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}

struct ContentView: View {
    // MAIN TOGGLES
    @State private var aimlock = false
    
    // Feature toggles
    @State private var quickSwipe = false
    @State private var steadyHold = false
    @State private var anchorAim = false
    @State private var shakeFix = false
    
    var body: some View {
        NavigationView {
            ZStack {
                // Background
                Color(.systemGroupedBackground)
                    .edgesIgnoringSafeArea(.all)
                
                VStack(spacing: 18) {
                    // Header with title + aimlock toggle
                    HStack(alignment: .center) {
                        Text("PANEL IOS🧸")
                            .font(.system(size: 30, weight: .bold, design: .rounded))
                        
                        Spacer()
                        
                        VStack(alignment: .trailing, spacing: 2) {
                            Text("AIMLOCK")
                                .font(.footnote)
                                .fontWeight(.semibold)
                                .foregroundColor(.secondary)
                            Toggle(isOn: $aimlock) {
                                EmptyView()
                            }
                            .labelsHidden()
                            .toggleStyle(SwitchToggleStyle(tint: .accentColor))
                        }
                    }
                    .padding(.horizontal)
                    .padding(.top, 12)
                    
                    // Card container
                    VStack(spacing: 14) {
                        FeatureRow(
                            title: "QUICK SWIPE",
                            subtitle: "Tăng Nhạy Màn Hình",
                            isOn: $quickSwipe,
                            disabled: false
                        )
                        
                        Divider().padding(.horizontal, -16)
                        
                        FeatureRow(
                            title: "STEADY HOLD",
                            subtitle: "V Đầm Tâm",
                            isOn: $steadyHold,
                            disabled: false
                        )
                        
                        Divider().padding(.horizontal, -16)
                        
                        FeatureRow(
                            title: "ANCHOR AIM",
                            subtitle: "V Ghìm Tâm",
                            isOn: $anchorAim,
                            disabled: false
                        )
                        
                        Divider().padding(.horizontal, -16)
                        
                        FeatureRow(
                            title: "SHAKE FIX",
                            subtitle: "V Giảm Rung Khi Vuốt",
                            isOn: $shakeFix,
                            disabled: false
                        )
                    }
                    .padding(.vertical, 14)
                    .padding(.horizontal, 12)
                    .background(.ultraThinMaterial)
                    .clipShape(RoundedRectangle(cornerRadius: 18, style: .continuous))
                    .shadow(color: Color.black.opacity(0.12), radius: 12, x: 0, y: 6)
                    .padding(.horizontal)
                    
                    Spacer()
                    
                    // Small footer / hint
                    HStack {
                        Text(aimlock ? "AIMLOCK: Đã bật" : "AIMLOCK: Tắt")
                            .font(.footnote)
                            .foregroundColor(.secondary)
                        Spacer()
                        // Optional quick action
                        Button {
                            // ví dụ hành động nhanh: tắt hết
                            quickSwipe = false
                            steadyHold = false
                            anchorAim = false
                            shakeFix = false
                        } label: {
                            Text("Reset")
                                .font(.footnote.weight(.semibold))
                                .padding(.vertical, 6)
                                .padding(.horizontal, 12)
                                .background(RoundedRectangle(cornerRadius: 10).fill(Color(.systemGray5)))
                        }
                    }
                    .padding(.horizontal)
                    .padding(.bottom, 20)
                }
            }
            .navigationBarHidden(true)
        }
        .navigationViewStyle(StackNavigationViewStyle())
    }
}

/// Reusable row view for each feature
struct FeatureRow: View {
    var title: String
    var subtitle: String
    @Binding var isOn: Bool
    var disabled: Bool = false
    
    var body: some View {
        HStack {
            VStack(alignment: .leading, spacing: 6) {
                Text(title)
                    .font(.system(size: 18, weight: .bold, design: .rounded))
                Text(subtitle)
                    .font(.system(size: 14, weight: .regular, design: .rounded))
                    .foregroundColor(.secondary)
            }
            Spacer()
            Toggle("", isOn: $isOn)
                .labelsHidden()
                .toggleStyle(SwitchToggleStyle(tint: .blue))
                .disabled(disabled)
        }
        .padding(.vertical, 8)
        .padding(.horizontal, 6)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
            .preferredColorScheme(.light)
        ContentView()
            .preferredColorScheme(.dark)
    }
}
