import { Switch } from "react-native"
import { useState } from "react";

const SettingSwitch = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
      <Switch
        trackColor={{ false: props.offThumb, true: props.onThumb}}
        thumbColor="#fff"
        ios_backgrounadColor="#fff"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    )
}

export default SettingSwitch;
