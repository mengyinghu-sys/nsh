// A case of the API's test suite (docs/dev/compatibility.md):
// `includeFontPadding`, the room the fonts reach beyond their ascent and
// descent taken into the text's box (the headless engine's fonts: an
// eighth of the size above, a thirty-second below), inherited from the
// views around the text and set off on the text itself.
import { Text, View } from "nsh";

function App() {
  return (
    <View style={{ flex: 1, paddingTop: 64, alignItems: "flex-start" }}>
      <Text testID="pad-off" style={{ fontSize: 16 }}>
        Plain<View testID="mark-off" style={{ width: 4, height: 4 }} />
      </Text>
      <View testID="pad-group" style={{ includeFontPadding: true, alignItems: "flex-start" }}>
        <Text testID="pad-on" style={{ fontSize: 16 }}>
          Plain<View testID="mark-on" style={{ width: 4, height: 4 }} />
        </Text>
        <Text testID="pad-own-off" style={{ fontSize: 16, includeFontPadding: false }}>
          Own
        </Text>
      </View>
    </View>
  );
}

export default App;
