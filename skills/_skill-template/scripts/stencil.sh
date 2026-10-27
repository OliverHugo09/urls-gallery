#!/usr/bin/env bash
# SKILL STENCIL
# Crea la estructura de un nuevo skill

set -euo pipefail

SKILL_NAME="${1:-}"
if [[ -z "$SKILL_NAME" ]]; then
  echo "Uso: $0 <skill-name>"
  exit 1
fi

SKILL_DIR="$PWD/skills/$SKILL_NAME"

mkdir -p "$SKILL_DIR/references"
mkdir -p "$SKILL_DIR/scripts"

cat > "$SKILL_DIR/SKILL.md" << 'EOF'
---
description: Skill description
---

# Skill Name

## When to use

## Steps

## Verification

EOF

echo "Skill '$SKILL_NAME' created at $SKILL_DIR"
