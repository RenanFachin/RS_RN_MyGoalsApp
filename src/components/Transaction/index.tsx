import { Pressable, PressableProps, Text, View } from "react-native"

import { styles } from "./styles"
import { currencyFormat } from "@/utils/currencyFormat"

type TransactionProps = {
  name: string
  date: string
  value: number
}

type Props = PressableProps & {
  transaction: TransactionProps
}

export function Transaction({ transaction, ...rest }: Props) {
  return (
    <Pressable style={styles.container} {...rest}>
      <View>
        <Text style={styles.name}>{transaction.name}</Text>
        <Text style={styles.date}>{transaction.date}</Text>
      </View>

      <Text style={[styles.value, styles.up]}>
        {currencyFormat(transaction.value)}
      </Text>
    </Pressable>
  )
}